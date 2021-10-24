
// const char code[] = 
//     "\xe9\x1e\x00\x00\x00"  //          jmp    (relative) <MESSAGE>
//     "\xb8\x04\x00\x00\x00"  //          mov    $0x4,%eax
//     "\xbb\x01\x00\x00\x00"  //          mov    $0x1,%ebx
//     "\x59"                  //          pop    %ecx
//     "\xba\x0f\x00\x00\x00"  //          mov    $0xf,%edx
//     "\xcd\x80"              //          int    $0x80
//     "\xb8\x01\x00\x00\x00"  //          mov    $0x1,%eax
//     "\xbb\x00\x00\x00\x00"  //          mov    $0x0,%ebx
//     "\xcd\x80"              //          int    $0x80
//     "\xe8\xdd\xff\xff\xff"  //          call   (relative) <GOBACK>
//     "Hello, wolrd!\r\n";     // OR       "\x48\x65\x6c\x6c\x6f\x2c\x20\x57"
//                             //          "\x6f\x72\x6c\x64\x21\x0d\x0a"
// __asm__(
//     ".global main\n"
//     ".type main @function\n"
//     "main:\n"
//     ".cfi_startproc\n"
//     ".cfi_endproc\n"
// );

__asm__(
"BITS 32\n"
"org     0x00010000\n"
"db      0x7F, \"ELF\"\n"
"dd      1\n"
"dd      0\n"
"dd      $$\n"
"dw      2\n"
"dw      3\n"
"dd      _start\n"
"dd      _start\n"
"dd      4\n"
"_start:\n"
"mov     bl, 42\n"
"xor     eax, eax\n"
"inc     eax\n"
"int     0x80\n"
"db      0\n"
"dw      0x34\n"
"dw      0x20\n"
"db      1\n"
"filesize      equ     $ - $$\n"
);