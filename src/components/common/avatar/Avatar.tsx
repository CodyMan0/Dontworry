import Image from 'next/image';

import UserIcon from '@/assets/icons/user.svg';

interface AvatarProps {
  size?: number;
  profileImage?: string;
}

export const Avatar = ({ size = 24, profileImage }: AvatarProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl"
    >
      {!!profileImage ? (
        <Image src={profileImage} width={size} height={size} alt="profile_image" />
      ) : (
        <UserIcon width={`calc(${size} / 1.5)`} height={`calc(${size} / 1.5)`} />
      )}
    </div>
  );
};
