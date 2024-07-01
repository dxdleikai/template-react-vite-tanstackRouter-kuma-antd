import { Button } from '@jd/ant-theme';
import ErrorWrapper from '@/components/ErrorWrapper';
import { k } from '@kuma-ui/core';
/** 404 */
export default function () {
  return (
    <ErrorWrapper>
      <k.div
        color="colors.sys-color-primary-600"
        display={'flex'}
        flexDirection={'column'}
        justify="center"
        alignItems="center"
        py={40}
        gap={20}
      >
        <k.img
          src="https://img13.360buyimg.com/imagetools/jfs/t1/224744/15/14149/11839/65f3b0e1F87f08a14/359e323d40224fcb.png"
          alt=""
          h={400}
        />
        <k.span>哦哦，迷路了～</k.span>
        <Button
          type="primary"
          size="large"
          onClick={function () {
            location.replace('#/apply');
          }}
        >
          返回首页
        </Button>
      </k.div>
    </ErrorWrapper>
  );
}
