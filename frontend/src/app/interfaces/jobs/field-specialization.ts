import { UUID } from 'crypto';
export interface FieldSpecialization {
  id?: UUID;
  name: string;
  job_field_id: UUID;
}
