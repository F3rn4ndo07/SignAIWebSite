'use server';

/**
 * @fileOverview Generates terms and conditions text using an LLM.
 *
 * - generateTermsAndConditions - A function that generates terms and conditions.
 * - GenerateTermsAndConditionsInput - The input type for the generateTermsAndConditions function.
 * - GenerateTermsAndConditionsOutput - The return type for the generateTermsAndConditions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTermsAndConditionsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  companyName: z.string().describe('The name of the company.'),
  country: z.string().describe('The country where the company is based.'),
  sector: z.string().describe('The sector the company operates in (e.g., healthcare, education).'),
});

export type GenerateTermsAndConditionsInput = z.infer<typeof GenerateTermsAndConditionsInputSchema>;

const GenerateTermsAndConditionsOutputSchema = z.object({
  termsAndConditions: z.string().describe('The generated terms and conditions text.'),
});

export type GenerateTermsAndConditionsOutput = z.infer<typeof GenerateTermsAndConditionsOutputSchema>;

export async function generateTermsAndConditions(
  input: GenerateTermsAndConditionsInput
): Promise<GenerateTermsAndConditionsOutput> {
  return generateTermsAndConditionsFlow(input);
}

const termsAndConditionsPrompt = ai.definePrompt({
  name: 'termsAndConditionsPrompt',
  input: {schema: GenerateTermsAndConditionsInputSchema},
  output: {schema: GenerateTermsAndConditionsOutputSchema},
  prompt: `You are a legal expert specializing in drafting terms and conditions for software products.

  Based on the product, company, country, and sector information provided, generate a comprehensive and legally sound terms and conditions document.

  Product Name: {{{productName}}}
  Company Name: {{{companyName}}}
  Country: {{{country}}}
  Sector: {{{sector}}}

  Terms and Conditions:`,
});

const generateTermsAndConditionsFlow = ai.defineFlow(
  {
    name: 'generateTermsAndConditionsFlow',
    inputSchema: GenerateTermsAndConditionsInputSchema,
    outputSchema: GenerateTermsAndConditionsOutputSchema,
  },
  async input => {
    const {output} = await termsAndConditionsPrompt(input);
    return output!;
  }
);
