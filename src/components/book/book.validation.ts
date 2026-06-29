import { z } from 'zod';

export const BookValidationSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title must be at most 200 characters')
    .trim(),
  author: z.string()
    .min(2, 'Author name must be at least 2 characters')
    .max(100, 'Author name must be at most 100 characters')
    .trim(),
  genre: z.string()
    .min(1, 'Genre is required')
    .trim(),
  publicationDate: z.string()
    .min(1, 'Publication date is required')
    .refine((date) => new Date(date) <= new Date(), {
      message: 'Publication date cannot be in the future',
    }),
  coverImage: z.string()
    .url('Invalid image URL format')
    .optional()
    .or(z.literal('')),
  description: z.string()
    .max(5000, 'Description must be at most 5000 characters')
    .trim()
    .optional(),
  isbn: z.string()
    .regex(
      /^(?:ISBN(?:-13)?:? )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)[-\ 0-9]{17}$/,
      'Invalid ISBN format'
    )
    .optional()
    .or(z.literal('')),
});

export const ReviewValidationSchema = z.object({
  rating: z.number()
    .int()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  comment: z.string()
    .min(3, 'Comment must be at least 3 characters')
    .max(1000, 'Comment must be at most 1000 characters')
    .trim(),
});