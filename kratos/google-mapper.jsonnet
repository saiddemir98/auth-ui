local claims = std.extVar('claims');

{
  identity: {
    traits: {
      name: {
        [if 'given_name' in claims then 'first' else null]: claims.given_name,
        [if 'family_name' in claims then 'last' else null]: claims.family_name,
      },
      [if 'email' in claims && claims.email_verified then 'email' else null]: claims.email,
    },
  },
}