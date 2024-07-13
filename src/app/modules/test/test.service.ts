import { ITest } from './test.interface';

const createTest = async (payload: ITest) => {
  console.log(payload);
};
const createTestItem = async (payload: ITest) => {
  console.log(payload);
};

export const TestService = {
  createTest,
  createTestItem,
};
