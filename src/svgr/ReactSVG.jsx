import * as React from "react"
const ReactSVG = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        className="fill-white dark:fill-black"
        {...props}>
        <path d="M34.555 3.984c-.78-.026-1.596.11-2.414.375-1.637.53-3.352 1.565-5.112 2.996a31.739 31.739 0 0 0-2.084 1.883A31.625 31.625 0 0 0 22.906 7.4c-1.758-1.43-3.468-2.462-5.101-2.992-1.633-.53-3.258-.546-4.592.225-1.334.77-2.132 2.184-2.49 3.863-.358 1.679-.32 3.678.039 5.916.125.778.305 1.593.508 2.424-.763.231-1.503.474-2.19.742-2.072.81-3.787 1.778-5.035 2.93-1.249 1.152-2.055 2.55-2.055 4.086 0 1.535.806 2.932 2.055 4.084C5.293 29.83 7.008 30.8 9.08 31.609c.734.287 1.53.545 2.35.79a32.188 32.188 0 0 0-.698 3.187c-.36 2.24-.397 4.24-.039 5.922.36 1.682 1.157 3.105 2.498 3.879 1.341.774 2.973.755 4.61.224 1.636-.53 3.35-1.562 5.11-2.994a31.643 31.643 0 0 0 2.066-1.863c.695.677 1.39 1.315 2.076 1.873 1.758 1.43 3.47 2.463 5.103 2.992 1.633.53 3.256.546 4.59-.224s2.132-2.185 2.49-3.864c.358-1.678.319-3.678-.04-5.916a32.131 32.131 0 0 0-.7-3.195c.848-.25 1.668-.515 2.424-.81 2.072-.81 3.787-1.78 5.035-2.932 1.249-1.152 2.055-2.549 2.055-4.084 0-1.536-.806-2.934-2.055-4.086-1.248-1.152-2.963-2.12-5.035-2.93a30.001 30.001 0 0 0-2.223-.752c.205-.836.386-1.657.512-2.44.36-2.24.398-4.24.039-5.923-.359-1.683-1.159-3.103-2.5-3.877-.67-.387-1.414-.575-2.193-.602zm-.092 2.036c.49.013.907.13 1.264.335.714.413 1.241 1.215 1.523 2.536.282 1.32.272 3.104-.06 5.173-.114.709-.28 1.46-.467 2.229a46.396 46.396 0 0 0-6.674-1.072 48.157 48.157 0 0 0-3.676-4.518 29.432 29.432 0 0 1 1.947-1.76c1.626-1.322 3.165-2.222 4.45-2.638.642-.209 1.204-.299 1.693-.285zm-18.977.005c.492-.013 1.055.077 1.7.286 1.288.417 2.83 1.317 4.457 2.64a29.326 29.326 0 0 1 1.906 1.72 48.309 48.309 0 0 0-3.701 4.56c-2.38.218-4.613.587-6.649 1.082a28.836 28.836 0 0 1-.463-2.22c-.332-2.07-.34-3.857-.058-5.18.282-1.325.814-2.132 1.535-2.548.36-.208.781-.326 1.273-.34zm9.49 6.118c.815.886 1.63 1.856 2.438 2.9A57.87 57.87 0 0 0 25 14.99c-.833 0-1.652.02-2.46.055a45.06 45.06 0 0 1 2.437-2.902zM25 17.01c1.36 0 2.685.056 3.975.15a56.84 56.84 0 0 1 2.58 4.057 57.157 57.157 0 0 1 1.98 3.752 57.171 57.171 0 0 1-2.008 3.802 57.142 57.142 0 0 1-2.011 3.215c-1.457.122-2.966.19-4.516.19a54.15 54.15 0 0 1-4.62-.2 57.237 57.237 0 0 1-1.978-3.167 57.122 57.122 0 0 1-2.002-3.793 57.037 57.037 0 0 1 2.012-3.817 56.736 56.736 0 0 1 2.568-4.035A54.3 54.3 0 0 1 25 17.01zm6.55.4c1.649.206 3.196.492 4.636.834a45.018 45.018 0 0 1-1.592 4.375c-.414-.798-.843-1.6-1.307-2.402a60.116 60.116 0 0 0-1.736-2.807zm-13.206.016c-.58.89-1.15 1.799-1.7 2.752-.469.813-.907 1.625-1.326 2.433a45 45 0 0 1-1.58-4.35 42.914 42.914 0 0 1 4.606-.835zm19.82 1.35c.709.214 1.394.438 2.022.683 1.91.746 3.42 1.63 4.4 2.533.98.904 1.404 1.766 1.404 2.602 0 .836-.425 1.698-1.404 2.601-.98.904-2.49 1.787-4.4 2.534-.698.272-1.465.52-2.262.753a49.523 49.523 0 0 0-2.158-5.466 48.431 48.431 0 0 0 2.398-6.24zm-26.361.01a48.328 48.328 0 0 0 2.367 6.177A49.526 49.526 0 0 0 12 30.46a27.8 27.8 0 0 1-2.186-.732c-1.91-.747-3.42-1.63-4.4-2.534-.98-.903-1.404-1.765-1.404-2.601 0-.836.425-1.698 1.404-2.602.98-.904 2.49-1.787 4.4-2.533a27.487 27.487 0 0 1 1.989-.674zM25 20c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 2c1.669 0 3 1.331 3 3s-1.331 3-3 3-3-1.331-3-3 1.331-3 3-3zm9.62 5.363c.524 1.241.98 2.456 1.362 3.627a42.87 42.87 0 0 1-3.83.7c.388-.62.771-1.25 1.145-1.897.469-.812.904-1.623 1.322-2.43zm-19.278.002c.42.812.858 1.627 1.33 2.444.37.64.746 1.263 1.129 1.875a42.765 42.765 0 0 1-3.819-.702c.382-1.167.838-2.38 1.36-3.617zm-1.936 5.559a45.9 45.9 0 0 0 5.852.972 49.298 49.298 0 0 0 4.29 5.391 29.372 29.372 0 0 1-1.927 1.744c-1.626 1.323-3.167 2.22-4.451 2.637-1.284.416-2.243.361-2.957-.05-.714-.413-1.24-1.215-1.522-2.536-.281-1.32-.273-3.103.059-5.172.15-.939.376-1.944.656-2.986zm23.155.008c.282 1.048.508 2.058.66 3.002.332 2.07.34 3.855.058 5.18-.282 1.324-.812 2.132-1.533 2.548-.72.416-1.686.472-2.975.055-1.288-.418-2.83-1.32-4.457-2.643a29.391 29.391 0 0 1-1.941-1.756 49.237 49.237 0 0 0 4.32-5.418 46 46 0 0 0 5.868-.968zm-14.694 1.17c1.027.056 2.067.093 3.133.093 1.03 0 2.037-.035 3.031-.088a46.038 46.038 0 0 1-3.084 3.74 46.198 46.198 0 0 1-3.08-3.745z" />
    </svg>
)
export default ReactSVG