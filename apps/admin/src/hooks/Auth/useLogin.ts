import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { sha512 } from "js-sha512";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "@/libs/Token/Token";
import { CheckinToast } from "@checkin/toast";
import { usePostLoginMutation } from "@/queries/Auth/query";
import { useQueryClient } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const postLoginMutation = usePostLoginMutation();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();

    if (idRef.current && pwRef.current) {
      postLoginMutation.mutate(
        {
          id: idRef.current.value,
          pw: sha512(pwRef.current.value),
        },
        {
          onSuccess: (data) => {
            Token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
            Token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
            router.push("/");

            CheckinToast.showSuccess("로그인 성공");
            queryClient.invalidateQueries([CheckInQueryKey.member.getMy]);
          },
        }
      );
    }
  };

  return {
    idRef,
    pwRef,
    onLogin,
  };
};
