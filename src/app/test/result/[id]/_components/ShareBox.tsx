'use client';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/components/common/typography';
import { KakaoShareButton } from '@/components/shared';
import { shareLink } from '@/utils/share';

const ShareBox = () => {
  const handleCopyClipboard = () => {
    shareLink({ url: location.href });
  };

  return (
    <>
      <Typography type="body2" className="pb-3xs text-center">
        내 결과 공유하기
      </Typography>
      <div className=" flex h-[52px] justify-center gap-3xs">
        <KakaoShareButton />
        <Button
          width="fit"
          Icon={<Icon icon="link" color="white" />}
          iconOnly
          className="rounded-[100%] bg-gray-600"
          onClick={handleCopyClipboard}
        />
      </div>
    </>
  );
};

export default ShareBox;
