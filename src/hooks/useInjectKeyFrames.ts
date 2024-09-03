
function useInjectKeyFrames(keyframes: string) {

    const stylesheet = document.styleSheets[0]
    stylesheet.insertRule(keyframes, stylesheet.cssRules.length)
}

export default useInjectKeyFrames;