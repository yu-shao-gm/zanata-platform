/*
 * Copyright 2014, Red Hat, Inc. and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

package org.zanata.rest.client;

import java.net.URI;

import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.zanata.rest.dto.ProjectIteration;

/**
 * @author Patrick Huang
 *         <a href="mailto:pahuang@redhat.com">pahuang@redhat.com</a>
 */
public class ProjectIterationClient {
    private final RestClientFactory factory;
    private final String projectSlug;
    private final String versionSlug;
    private URI baseUri;

    ProjectIterationClient(RestClientFactory factory, String projectSlug,
            String versionSlug) {
        this.factory = factory;
        this.projectSlug = projectSlug;
        this.versionSlug = versionSlug;
        baseUri = factory.getBaseUri();
    }

    public ProjectIteration get() {
        return webResource()
                .request(MediaType.APPLICATION_XML_TYPE)
                .get(ProjectIteration.class);
    }

    private WebTarget webResource() {
        return factory.getClient().target(baseUri)
                .path("projects").path("p").path(projectSlug)
                .path("iterations").path("i").path(versionSlug);
    }

    public void put(ProjectIteration projectVersion) {
        Response response = webResource().request()
                .put(Entity.xml(projectVersion));
        response.close();
    }

    public String sampleConfiguration() {
        return webResource().path("config")
                .request(MediaType.APPLICATION_XML_TYPE)
                .get(String.class);
    }
}

