import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

//   * This table has the following columns:
//      * - `advocateId`: The ID of the advocate who is being alerted.
//      * - `advocateName`: The name of the advocate who is being alerted.
//      * - `email`: The email address of the advocate who is being alerted.
//      * - `isActive`: A boolean indicating whether the alert is active or not.
//      * - `registerAt`: The time at which the alert was registered.
//      *
//      * This table has two indexes:
//      * - `by_advocate_Id`: An index on the `advocateId` column.
//      * - `by_email`: An index on the `email` column.

export default defineSchema({
    alerts:defineTable({
        advocateId: v.number(),
        advocateName: v.string(),
        email: v.string(),
        isActive: v.boolean(),
        registeredAt: v.string(),
    })
    .index("by_email",['email'])// Add this line to create the in
    .index("by_advocate_Id", ["advocateId"]),
});

