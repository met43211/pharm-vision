import { LoginForm } from '@/src/features/auth/login';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { CustomerHeader } from '@/src/widgets/customer/header';

type Props = {
  promotion?: string;
};

export const LoginPage = ({ promotion }: Props) => {
  return (
    <Flex center col className='h-dvh max-w-5xl mx-auto p-4' tag='section'>
      {promotion && <CustomerHeader promotionId={promotion} />}
      <br />
      <LoginForm promotion={promotion} />
    </Flex>
  );
};
