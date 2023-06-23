const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="30"
      viewBox="0 0 100 50"
      overflow="visible"
      fill="#ff2058"
      stroke="#ff2058"
    >
      <defs>
        <circle
          id="loader"
          r="4"
          cx="50"
          cy="50"
          transform="translate(0 -30)"
        />
      </defs>
      <use xlinkHref="#loader" transform="rotate(45 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.13s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.13s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(90 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.25s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.25s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(135 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.38s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.38s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(180 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.50s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.50s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(225 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.63s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.63s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(270 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.75s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.75s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(315 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.88s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="0.88s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
      <use xlinkHref="#loader" transform="rotate(360 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="1.00s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          dur="1s"
          begin="1.00s"
          repeatCount="indefinite"
          from="0 0"
          to="10"
        ></animateTransform>
      </use>
    </svg>
  );
};
export default Loading;
