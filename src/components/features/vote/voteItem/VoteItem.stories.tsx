import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import VoteItem from './VoteItem';

const meta = {
  title: 'components/features/vote/voteItem',
  component: VoteItem,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white p-2xs">
          <div className="flex flex-col gap-2">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof VoteItem>;

export default meta;
type Story = StoryObj<typeof VoteItem>;

export const Basic: Story = {
  render: () => (
    <VoteItem>
      <VoteItem.Radio disabled />
      <VoteItem.Text>10만원 내기</VoteItem.Text>
      <VoteItem.IconButton icon="photo" />
    </VoteItem>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <>
      <VoteItem readOnly>
        <VoteItem.Radio disabled />
        <VoteItem.Text>5만원</VoteItem.Text>
      </VoteItem>
      <VoteItem readOnly>
        <VoteItem.Radio disabled />
        <VoteItem.Text>7만원</VoteItem.Text>
      </VoteItem>
      <VoteItem readOnly>
        <VoteItem.Radio disabled checked color="gray" />
        <VoteItem.Text>10만원</VoteItem.Text>
      </VoteItem>
    </>
  ),
};

const Voting = () => {
  const [selected, setSelected] = useState('');
  const options = ['5만원', '7만원', '10만원'];

  return (
    <>
      {options.map((option) => (
        <VoteItem key={option} onClick={() => setSelected(option)}>
          <VoteItem.Radio checked={option === selected} />
          <VoteItem.Text>{option}</VoteItem.Text>
        </VoteItem>
      ))}
    </>
  );
};

export const Selected: Story = {
  render: () => <Voting />,
};

export const WithGauge: Story = {
  render: () => (
    <>
      <div>내가 선택한 항목이 가장 표가 많은 경우</div>
      <VoteItem>
        <VoteItem.Progress color="primary" progress={50} />
        <VoteItem.Radio disabled checked />
        <VoteItem.Text doubleLine>
          <div>5만원</div>
          <div className="text-primary-700">50표 / 50%</div>
        </VoteItem.Text>
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="gray" progress={25} />
        <VoteItem.Radio disabled />
        <VoteItem.Text doubleLine>
          <div>7만원</div>
          <div>25표 / 25%</div>
        </VoteItem.Text>
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="gray" progress={25} />
        <VoteItem.Radio disabled />
        <VoteItem.Text doubleLine>
          <div>10만원</div>
          <div>25표 / 25%</div>
        </VoteItem.Text>
      </VoteItem>

      <div className="mt-sm">내가 선택한 항목이 가장 표가 많지 않은 경우</div>
      <VoteItem>
        <VoteItem.Progress color="primary" progress={50} />
        <VoteItem.Radio disabled />
        <VoteItem.Text doubleLine>
          <div>5만원</div>
          <div className="text-primary-700">50표 / 50%</div>
        </VoteItem.Text>
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="gray" progress={25} />
        <VoteItem.Radio disabled checked color="primary" />
        <VoteItem.Text doubleLine>
          <div>7만원</div>
          <div>25표 / 25%</div>
        </VoteItem.Text>
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="gray" progress={25} />
        <VoteItem.Radio disabled />
        <VoteItem.Text doubleLine>
          <div>10만원</div>
          <div>25표 / 25%</div>
        </VoteItem.Text>
      </VoteItem>
    </>
  ),
};

export const WithInput: Story = {
  render: () => (
    <>
      <VoteItem>
        <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
        <VoteItem.IconButton icon="photo" />
      </VoteItem>
      <VoteItem>
        <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
        <VoteItem.IconButton icon="photo" />
      </VoteItem>
    </>
  ),
};

export const WithImage: Story = {
  render: () => (
    <>
      <VoteItem>
        <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
        <VoteItem.Img src={'https://dummyimage.com/600x400/000/fff.jpg'} alt="uploaded" />
      </VoteItem>
      <VoteItem readOnly>
        <VoteItem.Radio disabled />
        <VoteItem.Text>5만원</VoteItem.Text>
        <VoteItem.Img src={'https://dummyimage.com/600x400/000/fff.jpg'} alt="uploaded" />
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="gray" progress={25} />
        <VoteItem.Radio disabled />
        <VoteItem.Text doubleLine>
          <div>10만원</div>
          <div>25표 / 25%</div>
        </VoteItem.Text>
        <VoteItem.Img src={'https://dummyimage.com/600x400/000/fff.jpg'} alt="uploaded" />
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="primary" progress={50} />
        <VoteItem.Radio disabled checked />
        <VoteItem.Text doubleLine>
          <div>5만원</div>
          <div className="text-primary-700">50표 / 50%</div>
        </VoteItem.Text>
        <VoteItem.Img src={'https://dummyimage.com/600x400/000/fff.jpg'} alt="uploaded" />
      </VoteItem>
      <VoteItem>
        <VoteItem.Progress color="gray" progress={25} />
        <VoteItem.Radio disabled checked color="primary" />
        <VoteItem.Text doubleLine>
          <div>7만원</div>
          <div>25표 / 25%</div>
        </VoteItem.Text>
        <VoteItem.Img src={'https://dummyimage.com/600x400/000/fff.jpg'} alt="uploaded" />
      </VoteItem>
    </>
  ),
};
