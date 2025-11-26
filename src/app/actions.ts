'use server';

import { generateTermsAndConditions, type GenerateTermsAndConditionsInput } from '@/ai/flows/generate-terms-and-conditions';

export async function generateTermsAction(input: GenerateTermsAndConditionsInput): Promise<{ success: boolean; data?: { termsAndConditions: string; }; error?: string; }> {
  try {
    const result = await generateTermsAndConditions(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating terms and conditions:', error);
    // It's better not to expose raw error messages to the client.
    return { success: false, error: 'Hubo un error al generar los términos y condiciones. Por favor, intenta de nuevo.' };
  }
}
