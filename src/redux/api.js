import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        data: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        data: credentials,
      }),
    }),
    verify: builder.mutation({
      query: credentials => ({
        url: '/verify',
        method: 'POST',
        data: credentials,
      }),
    }),
    fetchDailyRate: builder.query({
      query: () => '/users/daily-rate',
    }),
    updateProfile: builder.mutation({
      query: credentials => ({
        url: '/users/update',
        method: 'PATCH',
        data: credentials,
      }),
    }),
    refresh: builder.query({
      query: () => '/users/current',
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    fetchProductsCategories: builder.query({
      query: () => '/products/categories',
    }),
    fetchProducts: builder.mutation({
      query: credentials => ({
        url: '/products',
        method: 'POST',
        data: credentials,
      }),
    }),
    fetchExercises: builder.query({
      query: () => '/exercises',
    }),
    fetchSubcategories: builder.query({
      query: () => '/subcategories',
    }),
    addProduct: builder.mutation({
      query: credentials => ({
        url: '/diary/products/add',
        method: 'POST',
        data: credentials,
      }),
    }),
    addExercise: builder.mutation({
      query: credentials => ({
        url: '/diary/exercises/add',
        method: 'POST',
        data: credentials,
      }),
    }),
    deleteProduct: builder.mutation({
      query: () => ({
        url: '/diary/products/delete',
        method: 'DELETE',
      }),
    }),
    deleteExercise: builder.mutation({
      query: () => ({
        url: '/diary/exercises/delete',
        method: 'DELETE',
      }),
    }),
    fetchDiary: builder.mutation({
      query: credentials => ({
        url: '/diary',
        method: 'POST',
        data: credentials,
      }),
    }),
    fetchStatistic: builder.query({
      query: () => '/statistic',
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useFetchDailyRateQuery,
  useUpdateProfileMutation,
  useRefreshQuery,
  useLogoutMutation,
  useFetchProductsCategoriesQuery,
  useFetchProductsMutation,
  useFetchExercisesQuery,
  useFetchSubcategoriesQuery,
  useAddProductMutation,
  useAddExerciseMutation,
  useDeleteProductMutation,
  useDeleteExerciseMutation,
  useFetchDiaryMutation,
} = api;
