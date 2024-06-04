import { UUID } from 'crypto';
export interface Job {
  id: string;
  title: string;
  description: string;
  language_id: string;
  language_variant_id: string;
  job_field_id: string;
  field_specialization_id: string;
  potential: boolean;
  actual: boolean;
  price: number;
  fixed_price: boolean;
  quoting_deadline: Date;
  submission_deadline: Date;
  excerpt: string;
  document: string;
  sample_translation_required: boolean;
  user_id: string;
}
