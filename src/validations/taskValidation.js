const { z } = require("zod");

const validStatuses = ["pending", "in-progress", "completed"];

const taskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().optional(),
  status: z.enum(validStatuses, "Invalid status"),
  dueDate: z.string().optional(),
});

const validateTask = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res
      .status(400)
      .json({ message: "Validation error", errors: result.error.errors });
  }
  next();
};

module.exports = { taskSchema, validateTask };
