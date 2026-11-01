import type { NextConfig } from "next";

// K-Pantry 는 patto 저장소(www.atlaslabstudios.com/kpantry/en)로 옮겼다.
// 이 독립 배포(k-pantry.vercel.app)로 들어오는 요청은 전부 새 주소로 영구(301) 이동시킨다.
// 옛 DB·회원가입이 계속 열려 있지 않도록 화면은 더 내주지 않는다.
const NEW_APP = 'https://www.atlaslabstudios.com/kpantry/en';

const nextConfig: NextConfig = {
  basePath: '/kpantry',
  async redirects() {
    return [
      // 같은 이름의 화면은 새 앱의 같은 화면으로(레시피 상세는 옛 UUID 주소라 목록으로)
      {
        source: '/kpantry/:page(recipes|ingredients|dishes|saved|subscribe)/:rest*',
        destination: `${NEW_APP}/:page`,
        statusCode: 301,
        basePath: false,
      },
      // 그 밖의 모든 경로(루트 / 포함)는 새 앱 홈으로
      {
        source: '/:path*',
        destination: NEW_APP,
        statusCode: 301,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
