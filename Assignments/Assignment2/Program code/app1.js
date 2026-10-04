const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'collegeDB';

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB successfully.\n');

    const db = client.db(dbName);
    const collection = db.collection('students');

    // Clean collection before running script
    await collection.deleteMany({});

    // 1. Insert at least 5 documents into the collection
    console.log('--- 1. Inserting Student Records ---');
    const studentsData = [
      { rollNo: "23CM001", name: "Ravi Kumar", branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
      { rollNo: "23CM002", name: "Sneha Reddy", branch: "CSE", year: 2, marks: 92, email: "sneha@example.com" },
      { rollNo: "23CM003", name: "Arjun Verma", branch: "ECE", year: 3, marks: 68, email: "arjun@example.com" },
      { rollNo: "23CM004", name: "Pooja Sharma", branch: "CSE-AIML", year: 4, marks: 45, email: "pooja@example.com" },
      { rollNo: "23CM005", name: "Vikram Das", branch: "IT", year: 1, marks: 48, email: "vikram@example.com" },
      { rollNo: "23CM006", name: "Ananya Patel", branch: "CSE", year: 3, marks: 88, email: "ananya@example.com" }
    ];
    const insertResult = await collection.insertMany(studentsData);
    console.log(`Inserted ${insertResult.insertedCount} students.\n`);

    // 2. Display all students
    console.log('--- 2. Display All Students ---');
    console.table(await collection.find({}).toArray());

    // 3. Display students belonging to a particular branch (CSE-AIML)
    console.log('\n--- 3. Students in CSE-AIML Branch ---');
    console.table(await collection.find({ branch: "CSE-AIML" }).toArray());

    // 4. Display students who scored more than 75 marks
    console.log('\n--- 4. Students Scoring More Than 75 Marks ---');
    console.table(await collection.find({ marks: { $gt: 75 } }).toArray());

    // 5. Search for a student using rollNo
    console.log('\n--- 5. Search Student by rollNo (23CM001) ---');
    console.table(await collection.find({ rollNo: "23CM001" }).toArray());

    // 6. Search students based on condition (Year = 3 AND Marks > 80)
    console.log('\n--- 6. Search Students (Year = 3 and Marks > 80) ---');
    console.table(await collection.find({ year: 3, marks: { $gt: 80 } }).toArray());

    // 7. Update the marks of a particular student (23CM003)
    console.log('\n--- 7. Updating Marks for 23CM003 ---');
    await collection.updateOne({ rollNo: "23CM003" }, { $set: { marks: 74 } });
    console.table(await collection.find({ rollNo: "23CM003" }).toArray());

    // 8. Update another field (email for 23CM001)
    console.log('\n--- 8. Updating Email for 23CM001 ---');
    await collection.updateOne({ rollNo: "23CM001" }, { $set: { email: "ravi.new@example.com" } });
    console.table(await collection.find({ rollNo: "23CM001" }).toArray());

    // 9. Delete a student record using rollNo (23CM005)
    console.log('\n--- 9. Deleting Student Record (23CM005) ---');
    await collection.deleteOne({ rollNo: "23CM005" });
    console.log('Record deleted successfully.');

    // 10. Display students in descending order of marks
    console.log('\n--- 10. Students Sorted by Marks (Descending) ---');
    console.table(await collection.find({}).sort({ marks: -1 }).toArray());

    // 11. Create an index on rollNo
    console.log('\n--- 11. Creating Index on rollNo ---');
    const indexName = await collection.createIndex({ rollNo: 1 }, { unique: true });
    console.log(`Index created: ${indexName}`);

    // 12. Demonstrate why indexing is useful
    console.log('\n--- 12. Performance Analysis (Execution Explanation) ---');
    const explanation = await collection.find({ rollNo: "23CM001" }).explain("executionStats");
    console.log(`Execution Stage: ${explanation.executionStats.executionStages.stage}`);
    console.log(`Total Keys Examined: ${explanation.executionStats.totalKeysExamined}`);
    console.log(`Total Docs Examined: ${explanation.executionStats.totalDocsExamined}`);
    console.log('Explanation: Indexing avoids full collection scans (COLLSCAN) by using IXSCAN, making search queries significantly faster on large datasets.');


    // --- REAL-TIME EXTENSION ⭐ ---

    console.log('\n========================================');
    console.log('        REAL-TIME EXTENSION ⭐          ');
    console.log('========================================');

    // Find students scoring above 80
    console.log('\n--- Extension 1: Students Scoring Above 80 ---');
    console.table(await collection.find({ marks: { $gt: 80 } }).toArray());

    // Find students scoring below 50
    console.log('\n--- Extension 2: Students Scoring Below 50 ---');
    console.table(await collection.find({ marks: { $lt: 50 } }).toArray());

    // Find the highest-scoring student
    console.log('\n--- Extension 3: Highest Scoring Student ---');
    console.table(await collection.find({}).sort({ marks: -1 }).limit(1).toArray());

    // Find students belonging to a particular branch (CSE)
    console.log('\n--- Extension 4: Students in CSE Branch ---');
    console.table(await collection.find({ branch: "CSE" }).toArray());

    // Display students sorted according to marks
    console.log('\n--- Extension 5: All Students Sorted by Marks ---');
    console.table(await collection.find({}).sort({ marks: -1 }).toArray());

  } catch (error) {
    console.error('Error executing MongoDB script:', error);
  } finally {
    await client.close();
    console.log('\nDatabase connection closed.');
  }
}

main();