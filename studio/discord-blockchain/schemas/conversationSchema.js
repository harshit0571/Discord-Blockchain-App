export const conversationSchema = {
  name: "conversations",
  type: "document",
  title: "Conversations",
  fields: [
    {
      name: "roomName",
      type: "string",
      title: "Room Name",
    },
    {
      name: "roomId",
      type: "string",
      title: "Room Id",
    },
    {
      name: "Image",
      type: "image",
      title: "Image",
    },
    {
      name: "IsDm",
      type: "boolean",
      title: "Is DM",
    },
    {
      name: "userReference",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
