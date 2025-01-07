/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { MoonIcon as LucideMoonIcon, SunIcon as LucideSunIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { DebounceInput } from "react-debounce-input"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Iconbutton_8b14ef16c72ef5d179644a24bc369b60 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_f44ca3ea4bbd8aae627eb8f0f6904b9a/>
</RadixThemesIconButton>
  )
}

export function Errorboundary_6cda0066e5936253e11bc57951f833aa () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])


  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))) }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100vh", ["display"] : "flex", ["justifyContent"] : "start", ["alignItems"] : "center" })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["justifyContent"] : "end" })} direction={"row"} gap={"3"}>

<Iconbutton_8b14ef16c72ef5d179644a24bc369b60/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesHeading css={({ ["transition"] : "all 550ms ease" })} size={"9"}>

{"Welcome to my Blog!"}
</RadixThemesHeading>
<RadixThemesText as={"p"}>

{"Create an account to get started."}
</RadixThemesText>
<RadixThemesSeparator size={"3"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["padding"] : "0rem 2rem" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "70%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "50%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "35%" }), ["transition"] : "all 550ms ease", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "start" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"}>

{"Username"}
</RadixThemesText>
<Debounceinput_b195c940146f92587caa9e143e0f2219/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["padding"] : "0rem 2rem" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "70%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "50%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "35%" }), ["transition"] : "all 550ms ease", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "start" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"}>

{"Email"}
</RadixThemesText>
<Debounceinput_0c1bc3ffb96bb25e3a0031ee30620d73/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["padding"] : "0rem 2rem" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "70%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "50%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "35%" }), ["transition"] : "all 550ms ease", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "start" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"}>

{"Password"}
</RadixThemesText>
<Debounceinput_46b86ac012d47e7670c0c69a73eae014/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["padding"] : "0rem 2rem" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "70%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "50%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "35%" }), ["transition"] : "all 550ms ease", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "start", ["height"] : "45px" })} direction={"row"} gap={"3"}>

<Button_9f598ef603820d0655afafc432c13092/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesText as={"p"}>

{"Already have account? click "}
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

{"here"}
</NextLink>
</RadixThemesLink>
{"."}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
</RadixThemesFlex>
<NextHead>

<title>

{"Register Form"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Button_9f598ef603820d0655afafc432c13092 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_af85088c3878907991984b9931eec5e5 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.blog_rflex___states____state.void_event", ({  }), ({  })))], args, ({  })))), [addEvents, Event])


  return (
    <RadixThemesButton color={"green"} css={({ ["width"] : "100%" })} onClick={on_click_af85088c3878907991984b9931eec5e5}>

<RadixThemesText as={"p"}>

{"Create Account!"}
</RadixThemesText>
</RadixThemesButton>
  )
}

export function Debounceinput_b195c940146f92587caa9e143e0f2219 () {
  const reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state = useContext(StateContexts.reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_718425b8240a658e6dd8f12ce9daa281 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.blog_rflex___states____state.blog_rflex___states____register_state.update_username", ({ ["username"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])


  return (
    <DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_718425b8240a658e6dd8f12ce9daa281} type={"text"} value={reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state.username}/>
  )
}

export function Debounceinput_0c1bc3ffb96bb25e3a0031ee30620d73 () {
  const reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state = useContext(StateContexts.reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_bc4d3a040f69786f60393670e3eb2d5b = useCallback(((_e) => (addEvents([(Event("reflex___state____state.blog_rflex___states____state.blog_rflex___states____register_state.update_email", ({ ["email"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])


  return (
    <DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_bc4d3a040f69786f60393670e3eb2d5b} type={"text"} value={reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state.email}/>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))



  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_f44ca3ea4bbd8aae627eb8f0f6904b9a () {
  const { resolvedColorMode } = useContext(ColorModeContext)




  return (
    <Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export function Debounceinput_46b86ac012d47e7670c0c69a73eae014 () {
  const reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state = useContext(StateContexts.reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_1c2850d4416347b80eb26d0af742bcf3 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.blog_rflex___states____state.blog_rflex___states____register_state.update_password", ({ ["password"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])


  return (
    <DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_1c2850d4416347b80eb26d0af742bcf3} type={"password"} value={reflex___state____state__blog_rflex___states____state__blog_rflex___states____register_state.password}/>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export default function Component() {

  return (
    <Errorboundary_6cda0066e5936253e11bc57951f833aa/>
  )
}
