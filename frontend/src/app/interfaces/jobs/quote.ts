import { UUID } from 'crypto';
export interface Quote {
  id: string;
  job_id: string;
  user_id: string;
  amount: number;
  description: string;
}
