import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

import { EXERCISES_CATEGORY, PRODUCTS_FILTER } from 'src/utils/constants';
const { MUSCLES, BODY_PART, EQUIPMENT } = EXERCISES_CATEGORY;
const { QUERY, RECOMMENDED, CATEGORY } = PRODUCTS_FILTER;

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }, { getState }) => {
    const token = getState().auth.token;
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: token
          ? { ...headers, Authorization: `Bearer ${token}` }
          : { ...headers },
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
    baseUrl: 'https://power-pulse-api.onrender.com/api',
  }),
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/users/register',
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
    // verify: builder.mutation({
    //   query: credentials => ({
    //     url: '/verify',
    //     method: 'POST',
    //     data: credentials,
    //   }),
    // }),
    addUserParams: builder.mutation({
      query: credentials => ({
        url: '/users/params',
        method: 'POST',
        data: credentials,
      }),
    }),
    updateUserParams: builder.mutation({
      query: credentials => ({
        url: '/users/params',
        method: 'PUT',
        data: credentials,
      }),
    }),
    updateUserName: builder.mutation({
      query: credentials => ({
        url: '/users/username',
        method: 'PATCH',
        data: credentials,
      }),
    }),
    updateUserAvatar: builder.mutation({
      query: credentials => ({
        url: '/users/avatar',
        method: 'PATCH',
        data: credentials,
      }),
    }),
    fetchUserParams: builder.query({
      query: () => ({ url: '/users/params' }),
    }),
    refresh: builder.query({
      query: () => ({ url: '/users/current' }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    fetchAllProducts: builder.query({
      query: filter => ({
        url: `/products${
          filter
            ? `?${filter[QUERY] ? `${QUERY}=${filter[QUERY]}&` : ''}${
                filter[RECOMMENDED]
                  ? `${RECOMMENDED}=${filter[RECOMMENDED]}&`
                  : ''
              }${
                filter[CATEGORY] ? `${CATEGORY}=${filter[CATEGORY]}&` : ''
              }page=${filter.page || 1}`
            : ''
        }`,
      }),
    }),
    fetchAllExercises: builder.query({
      query: filter => ({
        url: `/training/exercises${
          filter
            ? `?${filter[MUSCLES] ? `${MUSCLES}=${filter[MUSCLES]}&` : ''}${
                filter[BODY_PART] ? `${BODY_PART}=${filter[BODY_PART]}&` : ''
              }${
                filter[EQUIPMENT] ? `${EQUIPMENT}=${filter[EQUIPMENT]}&` : ''
              }page=${filter.page || 1}`
            : ''
        }`,
      }),
    }),
    fetchExercisesSubcategories: builder.query({
      query: category => ({
        url: `/training/subcategories${category ? `?filter=${category}` : ''}`,
      }),
    }),
    fetchDiary: builder.query({
      query: date => ({ url: `/diary/${date}` }),
    }),
    addProduct: builder.mutation({
      query: credentials => ({
        url: '/day/diaryProducts',
        method: 'POST',
        data: credentials,
      }),
    }),
    addExercise: builder.mutation({
      query: credentials => ({
        url: '/day/diaryExercises',
        method: 'POST',
        data: credentials,
      }),
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `/day/diaryProducts/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteExercise: builder.mutation({
      query: id => ({
        url: `/day/diaryExercises/${id}`,
        method: 'DELETE',
      }),
    }),
    // fetchStatistic: builder.query({
    //   query: () => '/statistic',
    // }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  // useVerifyMutation,
  useAddUserParamsMutation,
  useUpdateUserParamsMutation,
  useUpdateUserNameMutation,
  useUpdateUserAvatarMutation,
  useLazyFetchUserParamsQuery,
  useLazyRefreshQuery,
  useLogoutMutation,
  useLazyFetchAllProductsQuery,
  useLazyFetchAllExercisesQuery,
  useFetchExercisesSubcategoriesQuery,
  useLazyFetchDiaryQuery,
  useAddProductMutation,
  useAddExerciseMutation,
  useDeleteProductMutation,
  useDeleteExerciseMutation,
  // useFetchStatisticQuery,
} = api;