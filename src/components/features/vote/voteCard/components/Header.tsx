import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Icon } from '@/components/common/icon';
import { Tag } from '@/components/common/tag';
import { CATEGORIES } from '@/constants/category';
import { Typography } from '@/foundations/typography';
import { cn } from '@/lib/core';

type Props = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headerVariants> & {
    remainingDay?: number;
    voter?: number;
    categories?: (typeof CATEGORIES)[number];
    fontColor?: 'text-gray-600';
  };

const headerVariants = cva(`flex items-center justify-between pb-3xs`);

const Header = ({ remainingDay, voter, categories, className, fontColor }: Props) => {
  return (
    <div className={cn(headerVariants({ className }))}>
      {categories ? (
        <Tag>{categories}</Tag>
      ) : (
        <div className="flex items-center justify-center gap-1">
          <Icon icon="votebox" color="gray-300" />
          <Typography type="body2" className="text-gray-600">
            투표
          </Typography>
        </div>
      )}

      <div className="flex items-center">
        {/* TODO : 정확히 날짜 처리 논의 후 리팩토링 예정 */}
        {remainingDay === 0 && (
          <Typography type="body2" className="text-gray-600">
            투표기간 종료
          </Typography>
        )}
        {remainingDay && remainingDay > 0 ? (
          <Typography type="body2" className={cn('pr-5xs text-primary-700', fontColor)}>
            {remainingDay}일 남음
          </Typography>
        ) : null}

        {remainingDay && voter ? (
          <>
            <Icon icon="divider" color="gray-300" width={8} height={10} />
            <Typography type="body2" className="pl-5xs text-gray-600">
              {voter}명 참여
            </Typography>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
