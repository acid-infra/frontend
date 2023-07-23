// // EXTERNALS
// import axios from 'axios';
// import { UseMutationResult, useMutation } from '@tanstack/react-query';

// export function usePost<P, T>(
//   url: string,
//   resource: string,
// ): UseMutationResult<P, unknown, T, unknown> {
//   const allurl = `${url}${resource}`;

//   return useMutation<P, unknown, T, unknown>({
//     mutationKey: [resource],
//     mutationFn: async (payload) => {
//       const { data } = await axios.post<P>(allurl, payload);

//       return data;
//     },
//   });
// }
