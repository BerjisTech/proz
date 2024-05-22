import { UUID } from 'crypto';
export interface Quote {
  id?: UUID;
  job_id: UUID;
  user_id: UUID;
  amount: number;
  description: string;
}
