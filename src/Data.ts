class Data {
  private database: string;

  constructor(database: string) {
    this.database = database;
  }

  beginTran(): void {
    console.log("Beginning a transaction");
  }

  commit(): void {
    console.log("Committing transaction");
  }

  rollback(): void {
    console.log("Rolling back transaction");
  }

  insert(table: string, object: { getName(): string | undefined }): void {
    console.log(`Inserting ${object.getName()} into table ${table}`);
    // Actual insertion code should be async and use DB connection
  }

  // Example batch insert method placeholder
  async insertBatch(table: string, objects: { getName(): string | null }[]): Promise<void> {
    console.log(`Inserting batch of ${objects.length} records into table ${table}`);
    // implement batch console.logic asynchronously here
  }
}

export default Data;