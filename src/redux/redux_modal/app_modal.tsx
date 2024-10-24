/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IAppState {
  appSliceStatus: string | undefined;
  name: string;
  description: string;
  price: string;
  images: Array<{ id: number; image: string | null }>;
  sampleDataSet2?: Array<{ id: number, image: string, description: string, price: string} | undefined>
}
