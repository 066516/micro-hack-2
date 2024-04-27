import Svg, { Path, Circle } from "react-native-svg";

function Tasks({ color }) {
  return (
    <Path
      d="M25.6218 10.6758L17.248 2.33121C16.2116 1.3016 14.8078 0.723419 13.3442 0.723419C11.8807 0.723419 10.4769 1.3016 9.44049 2.33121L1.06665 10.6758C0.758001 10.9814 0.513293 11.3449 0.346714 11.7454C0.180134 12.1459 0.094996 12.5754 0.0962353 13.0089V23.8076C0.0962353 24.6828 0.445177 25.5222 1.0663 26.1411C1.68742 26.7599 2.52984 27.1076 3.40824 27.1076H23.2802C24.1586 27.1076 25.0011 26.7599 25.6222 26.1411C26.2433 25.5222 26.5922 24.6828 26.5922 23.8076V13.0089C26.5935 12.5754 26.5083 12.1459 26.3418 11.7454C26.1752 11.3449 25.9305 10.9814 25.6218 10.6758V10.6758ZM16.6562 24.9076H10.0322V20.5802C10.0322 19.705 10.3812 18.8656 11.0023 18.2468C11.6234 17.6279 12.4658 17.2802 13.3442 17.2802C14.2226 17.2802 15.0651 17.6279 15.6862 18.2468C16.3073 18.8656 16.6562 19.705 16.6562 20.5802V24.9076ZM24.3842 23.8076C24.3842 24.0993 24.2679 24.3791 24.0609 24.5854C23.8538 24.7917 23.573 24.9076 23.2802 24.9076H18.8642V20.5802C18.8642 19.1215 18.2827 17.7226 17.2475 16.6911C16.2123 15.6597 14.8082 15.0802 13.3442 15.0802C11.8802 15.0802 10.4762 15.6597 9.44101 16.6911C8.40581 17.7226 7.82424 19.1215 7.82424 20.5802V24.9076H3.40824C3.11544 24.9076 2.83463 24.7917 2.62759 24.5854C2.42055 24.3791 2.30424 24.0993 2.30424 23.8076V13.0089C2.30526 12.7174 2.42147 12.438 2.62771 12.2312L11.0015 3.88991C11.6239 3.27273 12.4662 2.92624 13.3442 2.92624C14.2223 2.92624 15.0646 3.27273 15.6869 3.88991L24.0608 12.2345C24.2662 12.4405 24.3823 12.7185 24.3842 13.0089V23.8076Z"
      fill={color}
    />
  );
}

export default Tasks;
