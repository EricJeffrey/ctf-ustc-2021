	.file	"a.c"
	.text
#APP
	.global main
.type main @function
main:
.cfi_startproc
.cfi_endproc

#NO_APP
	.globl	code
	.section	.rodata
	.align 32
	.type	code, @object
	.size	code, 56
code:
	.string	"\351\036"
	.string	""
	.string	""
	.string	"\270\004"
	.string	""
	.string	""
	.string	"\273\001"
	.string	""
	.string	""
	.string	"Y\272\017"
	.string	""
	.string	""
	.string	"\315\200\270\001"
	.string	""
	.string	""
	.string	"\273"
	.string	""
	.string	""
	.string	""
	.string	"\315\200\350\335\377\377\377Hello, wolrd!\r\n"
	.ident	"GCC: (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 4
	.long	 1f - 0f
	.long	 4f - 1f
	.long	 5
0:
	.string	 "GNU"
1:
	.align 4
	.long	 0xc0000002
	.long	 3f - 2f
2:
	.long	 0x3
3:
	.align 4
4:
