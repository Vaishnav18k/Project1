'use client';
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Helper function to get the next advocateId
const getNextAdvocateId = async (ctx: any) => {
  const lastAlert = await ctx.db
    .query("alerts")
    .order("desc")
    .first();
    
  return lastAlert ? lastAlert.advocateId + 1 : 1;
};

export const getAlerts = query({
  handler: async (ctx) => {
    return await ctx.db.query("alerts").order("desc").collect();
  },
});

export const addAlert = mutation({
  args: {
    advocateName: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existingAlert = await ctx.db
      .query("alerts")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingAlert) {
      throw new Error("Alert with this email already exists");
    }

    const nextId = await getNextAdvocateId(ctx);
    const now = new Date().toISOString();

    await ctx.db.insert("alerts", {
      advocateId: nextId,
      advocateName: args.advocateName,
      email: args.email,
      isActive: true,
      registeredAt: now,
    });
  },
});

export const toggleAlert = mutation({
  args: { id: v.id("alerts") },
  handler: async (ctx, args) => {
    const alert = await ctx.db.get(args.id);
    if (!alert) throw new Error("Alert not found");
    await ctx.db.patch(args.id, { isActive: !alert.isActive });
  },
});

export const deleteAlert = mutation({
  args: { id: v.id("alerts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});