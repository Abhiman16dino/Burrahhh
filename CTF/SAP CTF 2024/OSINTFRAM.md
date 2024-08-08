# Problem
Find out more about Laksh Norris which may lead you on a trail and in the end to the flag.

# Solution
While searching more about Laksh Norris, we found his github user where there was one project related to Nuclear Energy.

When we check all the commits, as the problem statement focus on trail, we found out in one of his commit he by mistake put the API Key and then removed in next commit.

Also API key has `==` in the end which made me think as it might be base64 encoded, and API Key was not the flag.

So the flag was `Base64 Decoded API Key`.