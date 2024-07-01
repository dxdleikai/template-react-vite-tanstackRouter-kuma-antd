import ErrorWrapper from '@/components/ErrorWrapper';
// import { uuid } from '@jd/react-util';
const uuid = function () {
  return Math.random();
};
const list = [
  {
    name: uuid(),
    children: [
      {
        name: uuid(),
        children: [
          {
            name: uuid(),
          },
        ],
      },
      {
        name: uuid(),
      },
    ],
  },
  {
    name: uuid(),
    children: [
      {
        name: uuid(),
      },
      {
        name: uuid(),
      },
    ],
  },
  {
    name: uuid(),
    children: [
      {
        name: uuid(),
      },
      {
        name: uuid(),
      },
    ],
  },
];

export const Inner = function (props: {
  children?: any[];
  name: string;
  parent?: any;
}) {
  const { children, name, parent } = props;
  //
  return (
    <div style={{ paddingLeft: '40px' }}>
      {name}
      {!parent ? <span>第一级</span> : null}
      {children?.map((item: any, index: number) => (
        <Inner {...item} parent={props}></Inner>
      ))}
    </div>
  );
};

export default function () {
  return (
    <ErrorWrapper>
      {list.map((item: any, index: number) => (
        <Inner {...item} parent={null}></Inner>
      ))}
    </ErrorWrapper>
  );
}
