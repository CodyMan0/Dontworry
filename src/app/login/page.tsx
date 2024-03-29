import { cookies } from 'next/headers';
import Image from 'next/image';

import worry from '@/assets/images/test-worry.png';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/layout/header';
import { KakaoLoginButton, RedirectToPreviousPage } from '@/components/shared';
import { CALLBACK_URL, IS_LOGIN } from '@/constants/auth';
import { getLoginMessage } from '@/utils/auth';

type Props = {
  searchParams: {
    [CALLBACK_URL]: string;
  };
};

const LoginPage = ({ searchParams }: Props) => {
  const callbackUrl = searchParams[CALLBACK_URL] ?? '/';
  const cookieStore = cookies();

  return (
    <>
      {cookieStore.has(IS_LOGIN) ? (
        <RedirectToPreviousPage />
      ) : (
        <div className="relative flex h-dvh w-full flex-col items-center bg-mainGradient pb-10">
          <Header>
            <Header.IconLink icon="chevronLeft" href="/" iconColor="gray-1000" iconSize={20} />
          </Header>

          <main className="flex size-full flex-col items-center px-4">
            <div className="mt-[23%] flex flex-col items-center gap-1">
              <Typography type="body2">3초만에 로그인하고</Typography>
              <Typography type="heading1" className="font-semibold">
                {getLoginMessage(callbackUrl)}
              </Typography>
            </div>

            <div className="relative my-auto h-1/3 w-2/3">
              <Image src={worry} fill alt="logo" priority sizes="" className="object-contain" />
            </div>

            <KakaoLoginButton callbackUrl={callbackUrl} />
          </main>
        </div>
      )}
    </>
  );
};

export default LoginPage;
