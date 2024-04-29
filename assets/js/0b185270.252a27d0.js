"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4885],{19577:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var t=o(85893),s=o(11151),i=(o(67294),o(93743));const a={tableOfContentsInline:"tableOfContentsInline_prmo"};function r(e){let{toc:n,minHeadingLevel:o,maxHeadingLevel:s}=e;return(0,t.jsx)("div",{className:a.tableOfContentsInline,children:(0,t.jsx)(i.Z,{toc:n,minHeadingLevel:o,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}const c={},l="Frequently Asked Questions",d={id:"FAQ",title:"Frequently Asked Questions",description:"Install the correct package - pyautogen",source:"@site/docs/FAQ.mdx",sourceDirName:".",slug:"/FAQ",permalink:"/autogen/docs/FAQ",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/FAQ.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Task Decomposition",permalink:"/autogen/docs/topics/task_decomposition"},next:{title:"Ecosystem",permalink:"/autogen/docs/ecosystem"}},h={},u=[{value:"Install the correct package - <code>pyautogen</code>",id:"install-the-correct-package---pyautogen",level:2},{value:"Set your API endpoints",id:"set-your-api-endpoints",level:2},{value:"Use the constructed configuration list in agents",id:"use-the-constructed-configuration-list-in-agents",level:3},{value:"How does an agent decide which model to pick out of the list?",id:"how-does-an-agent-decide-which-model-to-pick-out-of-the-list",level:3},{value:"Unexpected keyword argument &#39;base_url&#39;",id:"unexpected-keyword-argument-base_url",level:3},{value:"Can I use non-OpenAI models?",id:"can-i-use-non-openai-models",level:3},{value:"Handle Rate Limit Error and Timeout Error",id:"handle-rate-limit-error-and-timeout-error",level:2},{value:"How to continue a finished conversation",id:"how-to-continue-a-finished-conversation",level:2},{value:"<code>max_consecutive_auto_reply</code> vs <code>max_turn</code> vs <code>max_round</code>",id:"max_consecutive_auto_reply-vs-max_turn-vs-max_round",level:2},{value:"How do we decide what LLM is used for each agent? How many agents can be used? How do we decide how many agents in the group?",id:"how-do-we-decide-what-llm-is-used-for-each-agent-how-many-agents-can-be-used-how-do-we-decide-how-many-agents-in-the-group",level:2},{value:"Why is code not saved as file?",id:"why-is-code-not-saved-as-file",level:2},{value:"Legacy code executor",id:"legacy-code-executor",level:2},{value:"Agents keep thanking each other when using <code>gpt-3.5-turbo</code>",id:"agents-keep-thanking-each-other-when-using-gpt-35-turbo",level:2},{value:"ChromaDB fails in codespaces because of old version of sqlite3",id:"chromadb-fails-in-codespaces-because-of-old-version-of-sqlite3",level:2},{value:"How to register a reply function",id:"how-to-register-a-reply-function",level:2},{value:"How to get last message ?",id:"how-to-get-last-message-",level:2},{value:"How to get each agent message ?",id:"how-to-get-each-agent-message-",level:2},{value:"When using autogen docker, is it always necessary to reinstall modules?",id:"when-using-autogen-docker-is-it-always-necessary-to-reinstall-modules",level:2},{value:"Database locked error",id:"database-locked-error",level:2},{value:"Agents are throwing due to docker not running, how can I resolve this?",id:"agents-are-throwing-due-to-docker-not-running-how-can-i-resolve-this",level:2},{value:"If you want to disable code execution entirely",id:"if-you-want-to-disable-code-execution-entirely",level:3},{value:"If you want to run code execution in docker",id:"if-you-want-to-run-code-execution-in-docker",level:3},{value:"If you want to run code execution locally",id:"if-you-want-to-run-code-execution-locally",level:3},{value:"Migrating from <code>CompressibleAgent</code> and <code>TransformChatHistory</code> to <code>TransformMessages</code>",id:"migrating-from-compressibleagent-and-transformchathistory-to-transformmessages",level:2},{value:"Why migrate to <code>TransformMessages</code>?",id:"why-migrate-to-transformmessages",level:3},{value:"How to migrate?",id:"how-to-migrate",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,t.jsx)(r,{toc:u}),"\n",(0,t.jsxs)(n.h2,{id:"install-the-correct-package---pyautogen",children:["Install the correct package - ",(0,t.jsx)(n.code,{children:"pyautogen"})]}),"\n",(0,t.jsxs)(n.p,{children:["The name of Autogen package at PyPI is ",(0,t.jsx)(n.code,{children:"pyautogen"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pip install pyautogen\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Typical errors that you might face when using the wrong package are ",(0,t.jsx)(n.code,{children:"AttributeError: module 'autogen' has no attribute 'Agent'"}),", ",(0,t.jsx)(n.code,{children:"AttributeError: module 'autogen' has no attribute 'config_list_from_json'"})," etc."]}),"\n",(0,t.jsx)(n.h2,{id:"set-your-api-endpoints",children:"Set your API endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["This documentation has been moved ",(0,t.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"use-the-constructed-configuration-list-in-agents",children:"Use the constructed configuration list in agents"}),"\n",(0,t.jsxs)(n.p,{children:["This documentation has been moved ",(0,t.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-does-an-agent-decide-which-model-to-pick-out-of-the-list",children:"How does an agent decide which model to pick out of the list?"}),"\n",(0,t.jsxs)(n.p,{children:["This documentation has been moved ",(0,t.jsx)(n.a,{href:"/docs/topics/llm_configuration#how-does-an-agent-decide-which-model-to-pick-out-of-the-list",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"unexpected-keyword-argument-base_url",children:"Unexpected keyword argument 'base_url'"}),"\n",(0,t.jsxs)(n.p,{children:["In version >=1, OpenAI renamed their ",(0,t.jsx)(n.code,{children:"api_base"})," parameter to ",(0,t.jsx)(n.code,{children:"base_url"}),". So for older versions, use ",(0,t.jsx)(n.code,{children:"api_base"})," but for newer versions use ",(0,t.jsx)(n.code,{children:"base_url"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"can-i-use-non-openai-models",children:"Can I use non-OpenAI models?"}),"\n",(0,t.jsx)(n.p,{children:"Yes. You currently have two options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Autogen can work with any API endpoint which complies with OpenAI-compatible RESTful APIs - e.g. serving local LLM via FastChat or LM Studio. Please check ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/autogen/blog/2023/07/14/Local-LLMs",children:"https://microsoft.github.io/autogen/blog/2023/07/14/Local-LLMs"})," for an example."]}),"\n",(0,t.jsxs)(n.li,{children:["You can supply your own custom model implementation and use it with Autogen. Please check ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/autogen/blog/2024/01/26/Custom-Models",children:"https://microsoft.github.io/autogen/blog/2024/01/26/Custom-Models"})," for more information."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"handle-rate-limit-error-and-timeout-error",children:"Handle Rate Limit Error and Timeout Error"}),"\n",(0,t.jsxs)(n.p,{children:["You can set ",(0,t.jsx)(n.code,{children:"max_retries"})," to handle rate limit error. And you can set ",(0,t.jsx)(n.code,{children:"timeout"})," to handle timeout error. They can all be specified in ",(0,t.jsx)(n.code,{children:"llm_config"})," for an agent, which will be used in the OpenAI client for LLM inference. They can be set differently for different clients if they are set in the ",(0,t.jsx)(n.code,{children:"config_list"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_retries"})," (int): the total number of times allowed for retrying failed requests for a single client."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," (int): the timeout (in seconds) for a single client."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference#runtime-error",children:"documentation"})," for more info."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-continue-a-finished-conversation",children:"How to continue a finished conversation"}),"\n",(0,t.jsxs)(n.p,{children:["When you call ",(0,t.jsx)(n.code,{children:"initiate_chat"})," the conversation restarts by default. You can use ",(0,t.jsx)(n.code,{children:"send"})," or ",(0,t.jsx)(n.code,{children:"initiate_chat(clear_history=False)"})," to continue the conversation."]}),"\n",(0,t.jsxs)(n.h2,{id:"max_consecutive_auto_reply-vs-max_turn-vs-max_round",children:[(0,t.jsx)(n.code,{children:"max_consecutive_auto_reply"})," vs ",(0,t.jsx)(n.code,{children:"max_turn"})," vs ",(0,t.jsx)(n.code,{children:"max_round"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#max_consecutive_auto_reply",children:(0,t.jsx)(n.code,{children:"max_consecutive_auto_reply"})})," the maximum number of consecutive auto replie (a reply from an agent without human input is considered an auto reply). It plays a role when ",(0,t.jsx)(n.code,{children:"human_input_mode"}),' is not "ALWAYS".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#initiate_chat",children:[(0,t.jsx)(n.code,{children:"max_turns"})," in ",(0,t.jsx)(n.code,{children:"ConversableAgent.initiate_chat"})]})," limits the number of conversation turns between two conversable agents (without differentiating auto-reply and reply/input from human)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/groupchat#groupchat-objects",children:[(0,t.jsx)(n.code,{children:"max_round"})," in GroupChat"]})," specifies the maximum number of rounds in a group chat session."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-do-we-decide-what-llm-is-used-for-each-agent-how-many-agents-can-be-used-how-do-we-decide-how-many-agents-in-the-group",children:"How do we decide what LLM is used for each agent? How many agents can be used? How do we decide how many agents in the group?"}),"\n",(0,t.jsx)(n.p,{children:"Each agent can be customized. You can use LLMs, tools, or humans behind each agent. If you use an LLM for an agent, use the one best suited for its role. There is no limit of the number of agents, but start from a small number like 2, 3. The more capable is the LLM and the fewer roles you need, the fewer agents you need."}),"\n",(0,t.jsx)(n.p,{children:"The default user proxy agent doesn't use LLM. If you'd like to use an LLM in UserProxyAgent, the use case could be to simulate user's behavior."}),"\n",(0,t.jsx)(n.p,{children:"The default assistant agent is instructed to use both coding and language skills. It doesn't have to do coding, depending on the tasks. And you can customize the system message. So if you want to use it for coding, use a model that's good at coding."}),"\n",(0,t.jsx)(n.h2,{id:"why-is-code-not-saved-as-file",children:"Why is code not saved as file?"}),"\n",(0,t.jsxs)(n.p,{children:["If you are using a custom system message for the coding agent, please include something like:\n",(0,t.jsx)(n.code,{children:"If you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line."}),"\nin the system message. This line is in the default system message of the ",(0,t.jsx)(n.code,{children:"AssistantAgent"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"# filename"}),' doesn\'t appear in the suggested code still, consider adding explicit instructions such as "save the code to disk" in the initial user message in ',(0,t.jsx)(n.code,{children:"initiate_chat"}),".\nThe ",(0,t.jsx)(n.code,{children:"AssistantAgent"})," doesn't save all the code by default, because there are cases in which one would just like to finish a task without saving the code."]}),"\n",(0,t.jsx)(n.h2,{id:"legacy-code-executor",children:"Legacy code executor"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The new code executors offers more choices of execution backend.\nRead more about ",(0,t.jsx)(n.a,{href:"/docs/tutorial/code-executors",children:"code executors"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The legacy code executor is used by specifying the ",(0,t.jsx)(n.code,{children:"code_execution_config"})," in the agent's constructor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from autogen import UserProxyAgent\n\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    code_execution_config={"work_dir":"_output", "use_docker":"python:3"},\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"code_execution_config"})," specifies that the code will be\nexecuted in a docker container with the image ",(0,t.jsx)(n.code,{children:"python:3"}),".\nBy default, the image name is ",(0,t.jsx)(n.code,{children:"python:3-slim"})," if not specified.\nThe ",(0,t.jsx)(n.code,{children:"work_dir"})," specifies the directory where the code will be executed.\nIf you have problems with agents running ",(0,t.jsx)(n.code,{children:"pip install"})," or get errors similar to\n",(0,t.jsx)(n.code,{children:"Error while fetching server API version: ('Connection aborted.', FileNotFoundError(2, 'No such file or directory')"}),",\nyou can choose ",(0,t.jsx)(n.strong,{children:"'python:3'"})," as image as shown in the code example above and\nthat should solve the problem."]}),"\n",(0,t.jsxs)(n.p,{children:["By default it runs code in a docker container. If you want to run code locally\n(not recommended) then ",(0,t.jsx)(n.code,{children:"use_docker"})," can be set to ",(0,t.jsx)(n.code,{children:"False"})," in ",(0,t.jsx)(n.code,{children:"code_execution_config"}),"\nfor each code-execution agent, or set ",(0,t.jsx)(n.code,{children:"AUTOGEN_USE_DOCKER"})," to ",(0,t.jsx)(n.code,{children:"False"})," as an\nenvironment variable."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also develop your AutoGen application in a docker container.\nFor example, when developing in ",(0,t.jsx)(n.a,{href:"https://codespaces.new/microsoft/autogen?quickstart=1",children:"GitHub codespace"}),",\nAutoGen runs in a docker container.\nIf you are not developing in GitHub Codespaces,\nfollow instructions ",(0,t.jsx)(n.a,{href:"/autogen/docs/installation/Docker#option-1-install-and-run-autogen-in-docker",children:"here"}),"\nto install and run AutoGen in docker."]}),"\n",(0,t.jsxs)(n.h2,{id:"agents-keep-thanking-each-other-when-using-gpt-35-turbo",children:["Agents keep thanking each other when using ",(0,t.jsx)(n.code,{children:"gpt-3.5-turbo"})]}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:"gpt-3.5-turbo"}),' you may often encounter agents going into a "gratitude loop", meaning when they complete a task they will begin congratulating and thanking each other in a continuous loop. This is a limitation in the performance of ',(0,t.jsx)(n.code,{children:"gpt-3.5-turbo"}),", in contrast to ",(0,t.jsx)(n.code,{children:"gpt-4"})," which has no problem remembering instructions. This can hinder the experimentation experience when trying to test out your own use case with cheaper models."]}),"\n",(0,t.jsx)(n.p,{children:'A workaround is to add an additional termination notice to the prompt. This acts a "little nudge" for the LLM to remember that they need to terminate the conversation when their task is complete. You can do this by appending a string such as the following to your user input string:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"prompt = \"Some user query\"\n\ntermination_notice = (\n    '\\n\\nDo not show appreciation in your responses, say only what is necessary. '\n    'if \"Thank you\" or \"You\\'re welcome\" are said in the conversation, then say TERMINATE '\n    'to indicate the conversation is finished and this is your last message.'\n)\n\nprompt += termination_notice\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": This workaround gets the job done around 90% of the time, but there are occurrences where the LLM still forgets to terminate the conversation."]}),"\n",(0,t.jsx)(n.h2,{id:"chromadb-fails-in-codespaces-because-of-old-version-of-sqlite3",children:"ChromaDB fails in codespaces because of old version of sqlite3"}),"\n",(0,t.jsxs)(n.p,{children:["(from ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues/251",children:"issue #251"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Code examples that use chromadb (like retrieval) fail in codespaces due to a sqlite3 requirement."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'>>> import chromadb\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>\n  File "/home/vscode/.local/lib/python3.10/site-packages/chromadb/__init__.py", line 69, in <module>\n    raise RuntimeError(\nRuntimeError: Your system has an unsupported version of sqlite3. Chroma requires sqlite3 >= 3.35.0.\nPlease visit https://docs.trychroma.com/troubleshooting#sqlite to learn how to upgrade.\n'})}),"\n",(0,t.jsx)(n.p,{children:"Workaround:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pip install pysqlite3-binary"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"mkdir /home/vscode/.local/lib/python3.10/site-packages/google/colab"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Explanation: Per ",(0,t.jsx)(n.a,{href:"https://gist.github.com/defulmere/8b9695e415a44271061cc8e272f3c300?permalink_comment_id=4711478#gistcomment-4711478",children:"this gist"}),", linked from the official ",(0,t.jsx)(n.a,{href:"https://docs.trychroma.com/troubleshooting#sqlite",children:"chromadb docs"}),", adding this folder triggers chromadb to use pysqlite3 instead of the default."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-register-a-reply-function",children:"How to register a reply function"}),"\n",(0,t.jsxs)(n.p,{children:["(from ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues/478",children:"issue #478"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["See here ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#register_reply",children:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#register_reply"})]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you can register a reply function that gets called when ",(0,t.jsx)(n.code,{children:"generate_reply"})," is called for an agent."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def print_messages(recipient, messages, sender, config):\n    if "callback" in config and  config["callback"] is not None:\n        callback = config["callback"]\n        callback(sender, recipient, messages[-1])\n    print(f"Messages sent to: {recipient.name} | num messages: {len(messages)}")\n    return False, None  # required to ensure the agent communication flow continues\n\nuser_proxy.register_reply(\n    [autogen.Agent, None],\n    reply_func=print_messages,\n    config={"callback": None},\n)\n\nassistant.register_reply(\n    [autogen.Agent, None],\n    reply_func=print_messages,\n    config={"callback": None},\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above, we register a ",(0,t.jsx)(n.code,{children:"print_messages"})," function that is called each time the agent's ",(0,t.jsx)(n.code,{children:"generate_reply"})," is triggered after receiving a message."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-get-last-message-",children:"How to get last message ?"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#last_message",children:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#last_message"})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-get-each-agent-message-",children:"How to get each agent message ?"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#chat_messages",children:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#chat_messages"})]}),"\n",(0,t.jsx)(n.h2,{id:"when-using-autogen-docker-is-it-always-necessary-to-reinstall-modules",children:"When using autogen docker, is it always necessary to reinstall modules?"}),"\n",(0,t.jsx)(n.p,{children:'The "use_docker" arg in an agent\'s code_execution_config will be set to the name of the image containing the change after execution, when the conversation finishes.\nYou can save that image name. For a new conversation, you can set "use_docker" to the saved name of the image to start execution there.'}),"\n",(0,t.jsx)(n.h2,{id:"database-locked-error",children:"Database locked error"}),"\n",(0,t.jsxs)(n.p,{children:['When using VMs such as Azure Machine Learning compute instances,\nyou may encounter a "database locked error". This is because the\n',(0,t.jsx)(n.a,{href:"/autogen/docs/Use-Cases/agent_chat#cache",children:"LLM cache"}),"\nis trying to write to a location that the application does not have access to."]}),"\n",(0,t.jsxs)(n.p,{children:["You can set the ",(0,t.jsx)(n.code,{children:"cache_path_root"})," to a location where the application has access.\nFor example,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from autogen import Cache\n\nwith Cache.disk(cache_path_root="/tmp/.cache") as cache:\n    agent_a.initate_chat(agent_b, ..., cache=cache)\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can also use Redis cache instead of disk cache. For example,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from autogen import Cache\n\nwith Cache.redis(redis_url=...) as cache:\n    agent_a.initate_chat(agent_b, ..., cache=cache)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also disable the cache. See ",(0,t.jsx)(n.a,{href:"/autogen/docs/Use-Cases/agent_chat#llm-caching",children:"here"})," for details."]}),"\n",(0,t.jsx)(n.h2,{id:"agents-are-throwing-due-to-docker-not-running-how-can-i-resolve-this",children:"Agents are throwing due to docker not running, how can I resolve this?"}),"\n",(0,t.jsx)(n.p,{children:"If running AutoGen locally the default for agents who execute code is for them to try and perform code execution within a docker container. If docker is not running, this will cause the agent to throw an error. To resolve this you have some options."}),"\n",(0,t.jsx)(n.h3,{id:"if-you-want-to-disable-code-execution-entirely",children:"If you want to disable code execution entirely"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"code_execution_config"})," to ",(0,t.jsx)(n.code,{children:"False"})," for each code-execution agent. E.g.:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'user_proxy = autogen.UserProxyAgent(\n    name="agent",\n    llm_config=llm_config,\n    code_execution_config=False)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"if-you-want-to-run-code-execution-in-docker",children:"If you want to run code execution in docker"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Recommended"}),": Make sure docker is up and running."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"if-you-want-to-run-code-execution-locally",children:"If you want to run code execution locally"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"use_docker"})," can be set to ",(0,t.jsx)(n.code,{children:"False"})," in ",(0,t.jsx)(n.code,{children:"code_execution_config"})," for each code-execution agent."]}),"\n",(0,t.jsxs)(n.li,{children:["To set it for all code-execution agents at once: set ",(0,t.jsx)(n.code,{children:"AUTOGEN_USE_DOCKER"})," to ",(0,t.jsx)(n.code,{children:"False"})," as an environment variable."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"E.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'user_proxy = autogen.UserProxyAgent(\n    name="agent", llm_config=llm_config,\n    code_execution_config={"work_dir":"coding", "use_docker":False})\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"migrating-from-compressibleagent-and-transformchathistory-to-transformmessages",children:["Migrating from ",(0,t.jsx)(n.code,{children:"CompressibleAgent"})," and ",(0,t.jsx)(n.code,{children:"TransformChatHistory"})," to ",(0,t.jsx)(n.code,{children:"TransformMessages"})]}),"\n",(0,t.jsxs)(n.h3,{id:"why-migrate-to-transformmessages",children:["Why migrate to ",(0,t.jsx)(n.code,{children:"TransformMessages"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["Migrating enhances flexibility, modularity, and customization in handling chat message transformations. ",(0,t.jsx)(n.code,{children:"TransformMessages"})," introduces an improved, extensible approach for pre-processing messages for conversational agents."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-migrate",children:"How to migrate?"}),"\n",(0,t.jsxs)(n.p,{children:["To ensure a smooth migration process, simply follow the detailed guide provided in ",(0,t.jsx)(n.a,{href:"/autogen/docs/topics/long_contexts",children:"Handling Long Context Conversations with Transform Messages"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},93743:(e,n,o)=>{o.d(n,{Z:()=>f});var t=o(67294),s=o(86668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),o=Array(7).fill(-1);n.forEach(((e,n)=>{const t=o.slice(2,e.level);e.parentIndex=Math.max(...t),o[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:o,...s}=e;o>=0?n[o].children.push(s):t.push(s)})),t}function a(e){let{toc:n,minHeadingLevel:o,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:o,maxHeadingLevel:t});return function(e){return e.level>=o&&e.level<=t}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:o}=n;const t=e.find((e=>r(e).top>=o));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function l(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,t.useRef)(void 0),o=l();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:a}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:o}=e;const t=[];for(let s=n;s<=o;s+=1)t.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),l=c(r,{anchorTopOffset:o.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,o){o?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,o])}var h=o(33692),u=o(85893);function g(e){let{toc:n,className:o,linkClassName:t,isChild:s}=e;return n.length?(0,u.jsx)("ul",{className:s?void 0:o,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.Z,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:o,linkClassName:t})]},e.id)))}):null}const m=t.memo(g);function f(e){let{toc:n,className:o="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:h,...g}=e;const f=(0,s.L)(),p=l??f.tableOfContents.minHeadingLevel,x=h??f.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:o,maxHeadingLevel:s}=e;return(0,t.useMemo)((()=>a({toc:i(n),minHeadingLevel:o,maxHeadingLevel:s})),[n,o,s])}({toc:n,minHeadingLevel:p,maxHeadingLevel:x});return d((0,t.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:x}}),[r,c,p,x])),(0,u.jsx)(m,{toc:j,className:o,linkClassName:r,...g})}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var t=o(67294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);