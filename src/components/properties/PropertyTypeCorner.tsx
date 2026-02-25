// import React from 'react';
// import type { OperationType } from '@/types';
// import { OperationType as OperationTypeEnum, OPERATION_TYPE_COLOR } from '@/store/ui/ui-store';

// interface PropertyTypeCornerProps {
//   type: OperationType;
//   size?: number;
//   style?: React.CSSProperties;
// }


// const PropertyTypeCorner: React.FC<PropertyTypeCornerProps> = ({ type, size = 7, style }) => {
//   const color = OPERATION_TYPE_COLOR[type as OperationTypeEnum];

//   return (
//     <span
//       style={{
//         position: 'absolute',
//         bottom: 0,
//         right: 0,
//         width: size,
//         height: size,
//         borderTopLeftRadius: 2,
//         background: color,
//         display: 'inline-block',
//         zIndex: 2,
//         ...style,
//       }}
//       aria-label={type === 'SELL' ? 'Kauf' : 'Miete'}
//       title={type === 'SELL' ? 'KAUF' : 'MIETE'}
//     />
//   );
// };

// export default PropertyTypeCorner;
