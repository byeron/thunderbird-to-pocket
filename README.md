# thunderbird-to-pocket

[ref](https://bye-ron.hatenablog.com/entry/2023/12/01/172852) (日本語です)

## Verified version
Now, we verified only Thunderbird v115. please edit this section in `manifest.json` to use other version.
```
	"browser_specific_settings": {
		"gecko": {
			"id": "{3da0672f-e2fa-49f3-9431-8c82f11adbb5}",
			"strict_min_version": "115.0",
			"strict_max_version": "115.*"
		}
	}
```
`manifest.json` is in xpi file. `xpi` is alias of `zip`, so you rename `.xpi` to `.zip` and extract the file to edit manifest.
