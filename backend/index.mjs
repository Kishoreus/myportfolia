import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({ region: "us-east-1" }); // Change region if needed

export const handler = async (event) => {
  const body = JSON.parse(event.body);

  const command = new PutItemCommand({
    TableName: "ContactMessages",
    Item: {
      id: { S: uuidv4() },
      name: { S: body.name },
      email: { S: body.email },
      message: { S: body.message },
      timestamp: { S: new Date().toISOString() }
    }
  });

  try {
    await client.send(command);
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Message stored!" })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
