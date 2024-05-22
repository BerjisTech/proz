import { UUID } from 'crypto';
export interface Job {
  id?: UUID;
  title: string;
  description: string;
  language_id: UUID;
  language_variant_id: UUID;
  job_field_id: UUID;
  field_specialization_id: UUID;
  potential: boolean;
  actual: boolean;
  price: number;
  fixed_price: boolean;
  quoting_deadline: Date;
  submission_deadline: Date;
  excerpt: string;
  document: string;
  sample_translation_required: boolean;
  user_id: UUID;
}
