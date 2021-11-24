---
title: Using Excel to make changes to GTFS feeds
tags: csharp dotnet
see_also:
  - title: thzinc/gtfs-xlsx on GitHub
    url: https://github.com/thzinc/gtfs-xlsx
---

In my work at [GMV][gmv], I've had need to inspect and edit [General Transit Feed Specification (GTFS)][gtfs] feeds on numerous occasions. A GTFS static feed is simply a ZIP file containing several CSV-formatted text files that describe the routes and schedules of a transit agency. Because [GTFS is a specification that is explicitly human-editable][gtfs-principles] with common, non-programmer tools like spreadsheets, it's not uncommon to need to dig into a feed to find and correct clerical errors. However, because it's a ZIP file of text files with file extensions of `.txt`, it's still pretty inconvenient to try to open the files with something like Microsoft Excel.

Fortunately, the simplicity of the specification works in my favor. Conceptually, a GTFS feed can be translated concept-for-concept to an Excel workbook. Each file in the feed can be represented as a spreadsheet tab within the workbook.

![Screenshot of a GTFS feed unzipped into a directory next to Microsoft Excel with spreadsheet tabs for each of the files](/assets/using-excel-to-make-changes-to-gtfs-feeds-screenshot.png)

I built a simple command-line tool to convert from a GTFS feed into a Microsoft Excel workbook, and vice-versa. With this tool, I can convert a GTFS feed to an Excel workbook, make edits in Excel, and then convert the workbook back to a GTFS feed file.

I built the tool using .NET and have a version that's installable as a global tool for those with .NET 6.0 already installed, and also self-contained, dependency-free builds for Windows, macOS, and Linux. I think it's pretty easy to use:

1. Convert to Microsoft Excel workbook

   ```bash
   GtfsXlsxCli --from "MyFeed.zip" --to "MyFeed.xlsx"
   ```

2. Open `MyFeed.xlsx` in Excel and edit as desired
3. Convert back to GTFS feed

   ```bash
   GtfsXlsxCli --from "MyFeed.xlsx" --to "MyFeed.zip"
   ```

I'd love to know if you use this!

[gmv]: https://gmvsyncromatics.com/rtpi
[gtfs]: https://developers.google.com/transit/gtfs
[gtfs-principles]: https://developers.google.com/transit/gtfs/guides/guiding-principles#feeds_should_be_easy_to_create_and_edit
[find-me]: /find-me
