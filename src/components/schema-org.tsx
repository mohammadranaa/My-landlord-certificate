/** Renders one or more JSON-LD <script> tags for schema.org markup. */
export function SchemaOrg({
  schemas,
}: {
  schemas: Record<string, unknown>[];
}) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
