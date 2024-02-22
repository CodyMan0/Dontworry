'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/components/common/button';
import { CONFIG } from '@/config';

const KakaoShareButton = () => {
  const path = usePathname();
  console.log(path);

  const handleSendMessage = () => {
    const kakao = window.Kakao;
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `축의금 결정 어려웠나요?`,
        description: `돈워리로 축의금 고민 해결해 보세요.`,
        imageUrl: 'https://i.imgur.com/CtZUmU5.png',
        link: {
          mobileWebUrl: `${CONFIG.site}`,
          webUrl: `${CONFIG.site}`,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `${CONFIG.site}${path}?${CONFIG.param.query}`,
            webUrl: `${CONFIG.site}${path}?${CONFIG.param.query}`,
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={handleSendMessage}
      icon="kakaotalk"
      iconOnly
      className="rounded-[100%] bg-[#FEE500]"
      iconColor="gray-1000"
    />
  );
};

export default KakaoShareButton;
