/**
 * Copyright (C) 2016 Lightbend, Inc <http://www.lightbend.com>
 */
package activator

import java.io.File

/** vaguely-sbt-related utilities */
object Sbt {

  // "looks like" implies that this isn't completely reliable.
  // since it isn't.
  def looksLikeAProject(dir: File): Boolean = {
    import language.postfixOps
    Seq("build.sbt", "project/build.properties") find { relative =>
      (new File(dir, relative)).exists
    } isDefined
  }
}
