import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { setGatsbyGlobals } from '@bit-foundations/meta-frameworks.gatsby.config.globals';
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

setGatsbyGlobals();

import { GatsbyEnvAspect } from './gatsby-env.aspect';

export class GatsbyEnvPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const gatsbyEnvPreviewMain = new GatsbyEnvPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // react.registerProvider([ThemeCompositions]);

    return gatsbyEnvPreviewMain;
  }
}

GatsbyEnvAspect.addRuntime(GatsbyEnvPreviewMain);
