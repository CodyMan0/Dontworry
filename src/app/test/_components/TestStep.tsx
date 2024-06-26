import Image from 'next/image';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { ProgressBar } from '@/components/common/progressBar';
import { Tag } from '@/components/common/tag';
import { Typography } from '@/components/common/typography';
import {
  ALL_QUESTIONS_LENGTH,
  PRE_QUESTIONS_LENGTH,
  PROGRESS_RATE,
} from '@/constants/test/progress';
import { ALL_QUESTIONS, FUNNEL_LIST, MAIN_QUESTIONS } from '@/constants/test/step';
import { useTestDispatch, useTestState } from '@/contexts/test/TestsProvider';
import { useFunnelContext } from '@/contexts/test/useFunnelContext';
import { valueToPercent } from '@/utils/number';

import TestTemplate from './TestTemplate';

type TestProps = {
  // TODO : 타입 좁히기
  currentStep: string;
  onLoading: () => void;
};

const TestStep = ({ currentStep, onLoading }: TestProps) => {
  const { toNext, toPrev } = useFunnelContext();
  const test = useTestState();
  const dispatch = useTestDispatch();
  const isPreQuestion = currentStep.slice(0, 2) === '사전';
  const isLastQuestion = currentStep === FUNNEL_LIST[FUNNEL_LIST.length - 1];
  // TODO : 관심사 분리 예정 이로직이 여기 있어야하나?!
  const value = isPreQuestion
    ? ALL_QUESTIONS[currentStep].id
    : ALL_QUESTIONS[currentStep].id + PRE_QUESTIONS_LENGTH;

  // TODO : 빠르게 누를경우 의도하지 않은 에러가 발생한다. 결과 페이지에서 프로그래스바를 통해 알 수 있다. 리팩터링 요망

  return (
    <TestTemplate
      header={
        <>
          <div className="w-fit" onClick={toPrev} role="presentation">
            <Icon icon="chevronLeft" color="gray-1000" size={20} />
          </div>
          <ProgressBar
            progress={valueToPercent(value, 0, ALL_QUESTIONS_LENGTH)}
            className="mt-3xs"
            progressRate={PROGRESS_RATE}
          />
        </>
      }
      comment={
        <div className="flex flex-col gap-4xs">
          <Tag>
            {isPreQuestion
              ? 'Q.사전질문'
              : `${MAIN_QUESTIONS[currentStep].id}/${ALL_QUESTIONS_LENGTH - PRE_QUESTIONS_LENGTH}`}
          </Tag>
          <Typography type="question">
            {ALL_QUESTIONS[currentStep].question(isPreQuestion ? '' : test.buddy)}
          </Typography>
        </div>
      }
      body={
        <>
          {ALL_QUESTIONS[currentStep].image ? (
            <div className="absolute right-0">
              <Image
                src={ALL_QUESTIONS[currentStep].image as string}
                width={215}
                height={215}
                alt="testImage"
              />
            </div>
          ) : null}
        </>
      }
      footer={
        <div className=" flex flex-col gap-3xs">
          {ALL_QUESTIONS[currentStep].answerList.map((answer, index) => {
            return (
              <Button
                variant="accent"
                width="full"
                onClick={() => {
                  if (isPreQuestion) {
                    toNext();
                    dispatch({
                      type: `${ALL_QUESTIONS[currentStep].type}`,
                      value: answer,
                    });
                    return;
                  }
                  if (isLastQuestion) {
                    onLoading();
                  }
                  if (index === 0) {
                    // FIXME : typeError value : '' 임시 해결 ('{ type: "trust" | "love" | "talk" | "setBuddyName" | "setGender" | "setAge"; }' 형식의 인수는 'TestAction' 형식의 매개 변수에 할당될 수 없습니다.)
                    dispatch({
                      type: `${ALL_QUESTIONS[currentStep].type}`,
                      value: '',
                    });
                  }
                  toNext();
                }}
                key={index}
                className="h-md bg-primary-700 text-white"
              >
                {answer}
              </Button>
            );
          })}
        </div>
      }
    />
  );
};

export default TestStep;
