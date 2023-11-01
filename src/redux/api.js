import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

import { EXERCISES_CATEGORY, PRODUCTS_FILTER } from 'src/utils/constants';
const { MUSCLES, BODY_PARTS, EQUIPMENT } = EXERCISES_CATEGORY;
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
      query: name => ({
        url: '/users/username',
        method: 'PATCH',
        data: { name },
      }),
      transformResponse: response => response.name,
    }),
    updateUserAvatar: builder.mutation({
      query: avatarFile => {
        let bodyFormData = new FormData();

        bodyFormData.append('avatar', avatarFile);

        return {
          url: '/users/avatars',
          method: 'PATCH',
          data: bodyFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
      transformResponse: response => response.user.avatarUrls,
    }),
    fetchUserParams: builder.query({
      query: () => ({ url: '/users/params' }),
    }),
    fetchDailyRate: builder.query({
      query: () => ({ url: '/users/params' }),
      transformResponse: response => response.bmr,
    }),
    fetchUserBloodGroup: builder.query({
      query: () => ({ url: '/users/params' }),
      transformResponse: response => response.user.userParams.blood,
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
                  ? `${RECOMMENDED}=${filter[RECOMMENDED][0]}&`
                  : ''
              }${
                filter[CATEGORY] ? `${CATEGORY}=${filter[CATEGORY]}&` : ''
              }page=${filter.page || 1}`
            : ''
        }`,
      }),
    }),
    fetchProductsCategories: builder.query({
      query: () => ({ url: '/products/categories' }),
    }),
    fetchAllExercises: builder.query({
      query: filter => ({
        url: `/training/exercises${
          filter
            ? `?${filter[MUSCLES] ? `${MUSCLES}=${filter[MUSCLES]}&` : ''}${
                filter[BODY_PARTS] ? `${BODY_PARTS}=${filter[BODY_PARTS]}&` : ''
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
      query: date => ({ url: `/diary/day?date=${date}` }),
    }),
    fetchDiaryAll: builder.query({
      query: () => ({ url: `/diary/day` }),
      transformResponse: res => {
        return [
          ...new Set([
            ...res.exerciseResult.map(({ date }) =>
              new Date(date).toDateString(),
            ),
            ...res.productResult.map(({ date }) =>
              new Date(date).toDateString(),
            ),
          ]),
        ];
      },
    }),
    addProduct: builder.mutation({
      query: credentials => ({
        url: '/diary/day/diaryProducts',
        method: 'POST',
        data: credentials,
      }),
    }),
    addExercise: builder.mutation({
      query: credentials => ({
        url: '/diary/day/diaryExercises',
        method: 'POST',
        data: credentials,
      }),
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `/diary/day/diaryProducts/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteExercise: builder.mutation({
      query: id => ({
        url: `/diary/day/diaryExercises/${id}`,
        method: 'DELETE',
      }),
    }),
    fetchStatistic: builder.query({
      query: () => ({ url: '/statistic' }),
    }),
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
  useFetchUserParamsQuery,
  useLazyFetchUserParamsQuery,
  useFetchDailyRateQuery,
  useFetchUserBloodGroupQuery,
  useLazyRefreshQuery,
  useLogoutMutation,
  useLazyFetchAllProductsQuery,
  useFetchProductsCategoriesQuery,
  useLazyFetchAllExercisesQuery,
  useFetchExercisesSubcategoriesQuery,
  useLazyFetchDiaryQuery,
  useLazyFetchDiaryAllQuery,
  useAddProductMutation,
  useAddExerciseMutation,
  useDeleteProductMutation,
  useDeleteExerciseMutation,
  useFetchStatisticQuery,
} = api;
