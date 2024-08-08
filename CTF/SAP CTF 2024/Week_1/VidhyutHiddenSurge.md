# Problem
Try to find employee details of Vidyut.  A flag is hidden in the users database.
Hint: the domain found is a subdomain of asl-india-ctf.c.eu-de-2.cloud.sap


# Solution
This was a bit technical.

We had given a subdomain `asl-india-ctf.c.eu-de-2.cloud.sap`

Also the first flag that we found looks something like a domain with port `admin.vidyut:5000`

by combining these two we got `admin.vidyut.asl-india-ctf.c.eu-de-2.cloud.sap`

when we tried to open this we got unauthorized access.

Then I remembered the API Key, by looking at the code i found that there were different routes, we got the endpoint for the required routes from the code, and also the header `X-API-KEY` with the decode value for API Key, also the request was POST Type.

When i sent the request it returned a json list of all the users.

There was one user named `flag`.