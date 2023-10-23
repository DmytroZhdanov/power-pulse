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
    baseUrl: 'https://power-pulse-api.onrender.com/api',
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
      query: () => '/users/params',
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
    fetchAllProducts: builder.query({
      query: filter =>
        filter
          ? `/products/filter?${filter.title && `title=${filter.title}&`}${
              filter.recommended && `recommended=${filter.recommended}&`
            }${filter.category && `category=${filter.category}&`}page=${
              filter.page || 1
            }`
          : '/products',
    }),
    fetchAllExercises: builder.query({
      query: filter =>
        filter
          ? `/training/exercises/filter?${
              filter.target && `target=${filter.target}&`
            }${filter.bodyPart && `bodyPart=${filter.bodyPart}&`}${
              filter.equipment && `equipment=${filter.equipment}&`
            }page=${filter.page || 1}`
          : '/training/exercises',
    }),
    fetchAllSubcategories: builder.query({
      query: () => '/training/categories',
    }),
    // addProduct: builder.mutation({
    //   query: credentials => ({
    //     url: '/diary/products/add',
    //     method: 'POST',
    //     data: credentials,
    //   }),
    // }),
    // addExercise: builder.mutation({
    //   query: credentials => ({
    //     url: '/diary/exercises/add',
    //     method: 'POST',
    //     data: credentials,
    //   }),
    // }),
    // deleteProduct: builder.mutation({
    //   query: () => ({
    //     url: '/diary/products/delete',
    //     method: 'DELETE',
    //   }),
    // }),
    // deleteExercise: builder.mutation({
    //   query: () => ({
    //     url: '/diary/exercises/delete',
    //     method: 'DELETE',
    //   }),
    // }),
    // fetchDiary: builder.mutation({
    //   query: credentials => ({
    //     url: '/diary',
    //     method: 'POST',
    //     data: credentials,
    //   }),
    // }),
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
  useRefreshQuery,
  useLogoutMutation,
  useFetchProductsCategoriesQuery,
  useLazyFetchAllProductsQuery,
  useLazyFetchAllExercisesQuery,
  useFetchAllSubcategoriesQuery,
  // useAddProductMutation,
  // useAddExerciseMutation,
  // useDeleteProductMutation,
  // useDeleteExerciseMutation,
  // useFetchDiaryMutation,
} = api;
