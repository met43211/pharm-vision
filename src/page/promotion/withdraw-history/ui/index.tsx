import { MockWithdrawHistory } from '../config/mock-data';

import { CashbackStats } from '@/src/entities/cashback';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { WithdrawHistoryList } from '@/src/widgets/withdraw-history-list';

type Props = { promotionId: string };

export const PromotionWihdrawHistoryPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='История выводов'>
      <CashbackStats cashbackForAllTime={2392} cashbackForWeek={106} />
      <WithdrawHistoryList history={MockWithdrawHistory} />
    </SectionWithTitleLayout>
  );
};
